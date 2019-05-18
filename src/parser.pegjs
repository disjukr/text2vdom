{
    var React = require('react');
    function Component(name) {
        var customComponent = options.customComponents[name];
        if (customComponent) return customComponent;
        return name;
    }
    function el(name, children) {
        var component = Component(name);
        if (!children || !children.length) React.createElement(component);
        return React.createElement.apply(
            React,
            [component, null].concat(children)
        );
    }
}

children = (head:child tail:children {
    if (tail === null) return [head];
    if (typeof head === 'string' && typeof tail[0] === 'string') {
        tail[0] = head + tail[0];
    } else {
        tail.unshift(head);
    }
    return tail;
})?

child
    = tag
    / '&lt;' { return '<'; }
    / '&gt;' { return '>'; }
    / '&'
    / [^&<]

tag
    = x:selfClosingTag { return el(x); }
    / x:tagStart y:children tagEnd { return el(x, y); }

tagStart = '<' x:tagName '>' { return x; }
tagEnd = '</' x:tagName '>' { return x; }
selfClosingTag = '<' x:tagName '/>' { return x; }

tagName = x:([^/>]*) { return x.join('').trim(); }
