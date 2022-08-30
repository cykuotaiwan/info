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

func main() {
	fs := http.FileServer(http.Dir("assets"))
	http.Handle("/assets/", http.StripPrefix("/assets", fs))
	http.HandleFunc("/", HandleMain)
	fmt.Print("Starting server at port 8000\n")
	if err := http.ListenAndServe(":8000", nil); err != nil {
		log.Fatal(err)
	}
}
