# wp-workflow
Gulp configuration to use with WordPress

##How to use

Download wp-workflow to your `wp-content` folder:

```
git clone https://github.com/woliveiras/wp-workflow.git
````

Move the content of `wp-workflow` to your project:

```
cd wp-workflow

mv gulp/ package.json ../
```

Run:

```
npm i
```

Are ready to work!

## Tasks

- **backupFiles** : Backup all files important of project
- **backupLastYear** : Backup the last year folder existing in wp-content/uploads
- **backupYear** : Backup the year of you pass in terminal (gulp backupYear --year 2014)
- **backupMonth** : Backup month folder of you pass in terminal (gulp backupMonth --year 2013 --month 07)
- **backupMySQL** : Backup MySQL databases. Need `mysqldump` in your System (--user root --db database --dest backupDatabase
- **backupWP** : Backup folders and MySQL database (Need parameters too: --user root --db database --dest backupDatabase)
