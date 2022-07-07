FROM php:8.1-apache

# Setup the apache config
COPY ./config/vhost.conf /etc/apache2/sites-available/000-default.conf

RUN apt-get update && apt-get install -y zlib1g-dev libpng-dev libzip-dev libfreetype6-dev libjpeg62-turbo-dev libssl-dev pkg-config libedit-dev zip

RUN docker-php-ext-install mysqli \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install zip \
    && docker-php-ext-install pdo_mysql calendar gettext
    
# Enable mod_rewrite for images with apache
RUN a2enmod rewrite