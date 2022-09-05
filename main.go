package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

var temp *template.Template

func init() {
	temp = template.Must(template.ParseGlob("static/*.html"))
}

func HandleMain(w http.ResponseWriter, r *http.Request) {
	temp.ExecuteTemplate(w, "index.html", nil)
}

func HandleRWR(w http.ResponseWriter, r *http.Request) {
	temp.ExecuteTemplate(w, "rwr.html", nil)
}

func HandleStocker(w http.ResponseWriter, r *http.Request) {
	temp.ExecuteTemplate(w, "stocker.html", nil)
}

func main() {
	fs := http.FileServer(http.Dir("assets"))
	http.Handle("/assets/", http.StripPrefix("/assets", fs))
	data := http.FileServer(http.Dir("data"))
	http.Handle("/data/", http.StripPrefix("/data", data))

	http.HandleFunc("/", HandleMain)
	http.HandleFunc("/proj/rwr", HandleRWR)
	http.HandleFunc("/proj/stocker", HandleStocker)
	fmt.Print("Starting server at port 8050\n")
	if err := http.ListenAndServe(":8050", nil); err != nil {
		log.Fatal(err)
	}
}
