## Installation

Clone this repository

```bash
git clone git@github.com:twiragith/MathOps.git
```

Go inside the directory

```bash
cd MathOps
```

Now run composer to get laravel dependacies

```bash
composer install
```

Generate key on .env file

```bash
cp .env.example .env
php artisan key:generate
```
Then set-up the database connection. fill the following data according to your database.

```bash
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```
Then migrate the tables in to the databse
```bash
php artisan migrate
```
Then comment out the folowing code part in "app -> Model -> Reply.php"

```bash
/* static::creating(function ($reply) {
    $reply->user_id = auth()->id();
}); */
```
Then seed the database with laravel factories
```bash
php artisan db:seed
```

Then  remove comment in "app -> Model -> Reply.php"

```bash
static::creating(function ($reply) {
    $reply->user_id = auth()->id();
});
```
Then run npm to get vue dependacies

```bash
npm install
});
```
Then run npm to compile the vue into laravel mix

```bash
npm run dev
});
```
