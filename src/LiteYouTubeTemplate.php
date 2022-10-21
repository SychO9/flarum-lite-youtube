<?php

namespace SychO\LiteYouTube;

use s9e\TextFormatter\Configurator;

class LiteYouTubeTemplate
{
    public function __invoke(Configurator $config)
    {
        $tag = $config->tags['YOUTUBE'];

        $tag->template = '<lite-youtube videoid="{@id}" style="background-image: url(https://i.ytimg.com/vi/{@id}/hqdefault.jpg);"></lite-youtube>';
    }
}
