<?php

class Example
{
    function foo()
    {
        $this->bar();
        return $this;
    }

    function bar() {
        return $this;

    }
}
