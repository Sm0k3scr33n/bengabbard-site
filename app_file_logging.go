package main

import (
  "html/template"
  "log"
  "net/http"
  "os"
  "path"
  "net"
  "fmt"
  )

func main() {
      //  define the folder name 
      assetsdir := "assets"
      //  this is the path to the directory i.e. the directory which will host the  assets like js, css, and image files
      fileserver := http.FileServer(http.Dir(assetsdir))
      //  serve up a http handler for the request at the directory where the assets like images, css, and javascript will reside
      http.Handle("/"+assetsdir+"/", http.StripPrefix("/"+assetsdir+"/", fileserver))
      //server up the template to point to the root directory of the site
      http.HandleFunc("/", TemplateHandler)
      port:=":8080"
      f, err := os.OpenFile("logfile.log", os.O_RDWR | os.O_CREATE | os.O_APPEND, 0666)
             if err != nil {
                     log.Println("error opening file")
             }
            defer f.Close()
            log.SetOutput(f)
            log.Println("Program Started")
      log.Println("Listening on port", port)
      http.ListenAndServe(port, nil)
}

func TemplateHandler(w http.ResponseWriter, r *http.Request) {
      ///define our primary layout definition for the global structure of the website
      layoutpath := path.Join("templates", "layout.html")
      filepath := path.Join("templates", r.URL.Path)
      //handle the requests to the home directory by redirecting to the index file
      indexpath := path.Join("templates", "/")
      if filepath == indexpath{  
            http.Redirect(w, r, "index.html", 301)
            return
           }

      // 404 if the template doesn't exist
      info, err := os.Stat(filepath)
      if err != nil {
            if os.IsNotExist(err) {
              //handle 404 errors by redirecting to the 404.html page template 
              http.Redirect(w, r, "../404.html", 301)
                          ip, port, err := net.SplitHostPort(r.RemoteAddr)
                            if err != nil {
                                log.Print("Request IP: [", r.RemoteAddr, "] is not IP:port")
                            }
                            RequestIP := net.ParseIP(ip)
                            if RequestIP == nil {
                                log.Print("Request IP: [", r.RemoteAddr, "] is not IP:port")
                                return
                            }
                                log.Println("#############################") 
                                log.Println("#### Requested Path: ", r.URL.Path)
                                log.Println("#### IP: ", ip)
                                log.Println("#### Port: ", port)
                                log.Println("#############################") 
                                return
            }
      }

      // 404 if the request is for a directory
      if info.IsDir() {
              //handle 404 errors by redirecting to the 404.html page template         
              http.Redirect(w, r, "../404.html", 301)
              // get client IP address    
              ip, port, err := net.SplitHostPort(r.RemoteAddr)
                    if err != nil {
                        log.Print("Request IP: [", r.RemoteAddr, "] is not IP:port")
                    }
                    userIP := net.ParseIP(ip)
                    if userIP == nil {
                        log.Print("Request IP: [", r.RemoteAddr, "] is not IP:port")
                        return
                  }
                   log.Println("#############################") 
                   log.Println("#### Request: ", r.URL.Path)
                   log.Println("#### IP: ", ip)
                   log.Println("#### Port: ", port)
                   log.Println("#############################") 
                   return
      }

      tmpl, err := template.ParseFiles(layoutpath, filepath)
      if err != nil {
          // Log the detailed error
          log.Println(err.Error())
          // Return a generic "Internal Server Error" message
          http.Error(w, http.StatusText(500), 500)
          return
      }



      if err := tmpl.ExecuteTemplate(w, "layout", nil); err != nil {
          log.Println(err.Error())
          http.Error(w, http.StatusText(500), 500)
          fmt.Fprintf(w, "error formatting layout")
      }
}
