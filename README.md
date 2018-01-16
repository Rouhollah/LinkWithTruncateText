# LinkWithTruncateText directive
This is a directive that produces &lt;a> element with ability to truncate text.
### Syntax
```
<dr-truncate-link 
                  link="about.html" or {{item.Address}}
                  number=50 
                  text="text" or {{item.Message}}
                  more="show" 
                  less="hide" 
                  class="noUnderLine"
                  target="_blank">
</dr-truncate-link>
```
### details:
- dr-truncate-link: name of directive.
- link: put your address here.
- number: With this attribute, you can specify how many characters are displayed.
- text: your text must be here. static or dynamic.
- more: this is a text that you want are displayed when the text has truncated.
- less: This text is displayed before the main text is shortened.
- class: use this attribute to set class(es).
- target: Use this element, such as the <a> tag.

# truncateText filter
you can truncate yout text with this filter.
## syntax
```
{{item.Message|truncateText:50}}
```
 or 
 ```
 {{a long text that must be truncate|truncateText:10}}
 ```
### details
- item.Message: your text.
- truncateText: name of filter.
- 50: number of characters that are displayed.