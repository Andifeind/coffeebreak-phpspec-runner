<?php

namespace spec;

use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

class ExampleSpec extends ObjectBehavior
{
    function it_is_initializable()
    {
        $this->shouldHaveType('Example');
    }

    function it_should_call_bar()
    {
        $this->bar()->shouldBeCalled();
        $this->foo();
    }
}
