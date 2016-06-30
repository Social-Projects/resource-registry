
Resource-registry project
============================

Resource-registry project is a web [Yii 2](http://www.yiiframework.com/) application for the 
decentralized property register of Natural Resources of Ukraine.

CONTRIBUTORS
------------

* **[Roman Grabar](https://github.com/romangrb)**
* **[Dmytro Miekh](https://github.com/Diedonne)**
* **[Eduard Litvynchuck](https://github.com/litvinchuck)**
* **[Vitalii Shevchuck](https://github.com/Vitashev)**
* **[Yevhenii Stepanov](https://github.com/tird)**
* **[Marian Turchyn](https://github.com/marianturchyn)**


Technical Expert
Orest Osipov

Project managers:
Ihor Kohut
Vyacheslav Koldovskyy https://github.com/koldovsky


* **[Olga Nagorna](https://github.com/olganagorna)**
* **[Kostiantyn Shakhzadov](https://github.com/Shakhzadov)**
* **[Andrii Uhryn](https://github.com/a-ugryn)**
* **[Yevheniy Potupa](https://github.com/genyklemberg)**
* **[Andriy Khrobak](https://github.com/AndriyKhrobak)**
* **[Nazariy Zhovniriv](https://github.com/nzhovniriv)**
* **[Yuriy Teslenko](https://github.com/YuriyTeslenko)**


Technical Expert
Andriy Fedchuk

Project managers:
Ihor Kohut


DIRECTORY STRUCTURE
-------------------

      commands/           contains console commands (controllers)
      config/             contains application configurations
      controllers/        contains Web controller classes
      mail/               contains view files for e-mails
      models/             contains model classes
      rbac/		  contains access permission
      runtime/            contains files generated during runtime
      tests/              contains various tests for the basic application
      vendor/             contains dependent 3rd-party packages
      web/                contains the entry script and Web resources



REQUIREMENTS
------------

The minimum requirement by this project template that your Web server supports PHP 5.4.0.


INSTALLATION
------------

Detailed instruction is described in "local LAMP config for resource registry app.txt" in root folder of the project.

### Install from an Archive File

Extract the archive file downloaded from [github.com](https://github.com/afedchuk/resource-registry/archive/lv-180.zip) to
a root directory or any subdirectory located directly under the Web root.

Set cookie validation key in `config/web.php` file to some random secret string:

```php
'request' => [
    // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
    'cookieValidationKey' => '<secret random string goes here>',
],
```

You can then access the application through the following URL:

~~~
http://localhost/<subdirectory>
~~~


### Install via Git

If you do not have [git](https://git-scm.com) installed on your computer, you may install it by following the instructions
at [git-scm.com](https://git-scm.com/downloads).

Navigate to a root directory or any subdirectory located directly under the Web root.

You can then install this project using the following command:

~~~
git clone <repository url>
~~~

Now you should be able to access the application through the following URL:

~~~
http://localhost/<subdirectory>
~~~


DATABASE SETUP
--------------

A `resource_registry.sql` file is included in the repository. It should be used to create the base structure
of the database

### Using PhpMyAdmin

If you do not have [PhpMyAdmin](https://www.phpmyadmin.net/), you can install it by following the instructions
at [wiki.phpmyadmin.net](http://wiki.phpmyadmin.net/pma/Quick_Install).

* ##### Step 1
  Login into PhpMyAdmin.
* ##### Step 2
  Select the database in the left menu that you will be working with or create a new one.
* ##### Step 3
  Click Import in the top menu.
* ##### Step 4
  Under File to Import, click Browse and select the `resource_registry.sql` file.
* ##### Step 5
  Click OK at the bottom left

When the database has been imported successfully, you should see a message at the top of the page similar to:
> Import has been successfully finished, xx queries executed.

CONFIGURATION
-------------

### Database

Edit the file `config/db.php` with real data, for example:

```php
return [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=localhost;dbname=resource-registry',
    'username' => 'root',
    'password' => '1234',
    'charset' => 'utf8',
];
```
