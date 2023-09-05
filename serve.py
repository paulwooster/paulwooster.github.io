#!/usr/bin/python

### Start a local http server for viewing files in this directory and subfolders

import http.server
import os
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving {os.getcwd()} on port {PORT}, press Ctrl+C to exit")
    print()
    print(f"http://localhost:{PORT}/")
    print()
    httpd.serve_forever()
