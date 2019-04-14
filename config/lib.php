<?php

const TEMPLATES = __DIR__ . '/../templates';
const DATAFILES = __DIR__ . '/../App/Datafiles';
const CACHE = __DIR__ . '/../tmp/cache';

function debug($data)
{
    echo '<pre>';
    print_r($data);
    echo '</pre>';
}
