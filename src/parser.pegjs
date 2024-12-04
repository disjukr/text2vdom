{
    var React = require('react');
    function Component(name) {
        var customComponent = options.customComponents[name];
        if (customComponent) return customComponent;
        return name;
    }
    function el({name, attrs}, children) {
        var component = Component(name);
        var props = {};
        attrs.forEach(({key, value}) => props[key] = value);
        if (!children || !children.length) React.createElement(component, props);
        return React.createElement.apply(
            React,
            [component, props].concat(children)
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

tagStart = '<' _ x:tagName _ ys:attrs? _ '>' { return { name: x, attrs: ys || [] }; }
tagEnd = '</' _ x:tagName _ '>' { return x; }
selfClosingTag = '<' _ x:tagName _ ys:attrs? _ '/>' { return { name: x, attrs: ys || [] }; }

tagName = [a-zA-Z_:][a-zA-Z0-9_:.-]* { return text(); }

attrs = x:attr+ { return x; }
attr = _ key:attrName _ '=' _ value:attrValue _ { return { key, value }; }
attrName = [a-zA-Z_:][a-zA-Z0-9_:.-]* { return text(); }
attrValue
    = '"' value:([^"]*) '"' { return value.join('').trim(); }
    / "'" value:([^']*) "'" { return value.join('').trim(); }

_ = (' '*)
