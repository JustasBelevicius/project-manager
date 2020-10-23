variable "database" {
  type        = string
  description = "Database name"
}

variable "user_name" {
  type        = string
  description = "User name"
}

variable "user_password" {
  type        = string
  description = "User password"
}

variable "root_password" {
  type        = string
  description = "Root password"
}

provider "docker" {
  host = "tcp://127.0.0.1:2375"
}

resource "docker_container" "database" {
  name     = "database"
  image    = "mysql:latest"
  restart  = "always"
  start    = true
  hostname = "127.0.0.1"
  must_run = true
  env = [
    "MYSQL_DATABASE=${var.database}",
    "MYSQL_USER=${var.user_name}",
    "MYSQL_PASSWORD=${var.user_password}",
    "MYSQL_ROOT_PASSWORD=${var.root_password}"
  ]
  upload {
    source = "../database/tables.sql"
    file = "docker-entrypoint-initdb.d/tables.sql"
  }
  ports {
    internal = 3306
    external = 6603
    ip = "127.0.0.1"
  }
}