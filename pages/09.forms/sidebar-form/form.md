---
title: 'Sidebar Form'
sidebar: right
testimonial: '0'
routable: false
visible: false
form:
    name: sidebar-form
    title: 'Get your free rental pricing analysis today.'
    title_classes: 'h4 text-primary'
    classes: 'form-group text-center mb-0'
    outer_classes: bg-dark
    fields:
        -
            name: name
            label: 'Full Name'
            labelclasses: sr-only
            classes: 'form-control mb-1 border-light'
            placeholder: 'Enter your full name'
            type: text
            validate:
                required: true
        -
            name: phone
            label: 'Phone Number'
            labelclasses: sr-only
            classes: 'form-control mb-1 border-light'
            placeholder: 'Enter your phone number'
            type: text
            validate:
                required: true
        -
            name: email
            label: 'Email Address'
            labelclasses: sr-only
            classes: 'form-control mb-1 border-light'
            placeholder: 'Enter your email'
            type: text
            validate:
                required: true
        -
            name: address
            label: 'Rental Address'
            labelclasses: sr-only
            classes: 'form-control mb-1 border-light'
            placeholder: 'Enter your rental address'
            type: text
            validate:
                required: true
        -
            name: honeypot
            type: honeypot
        -
            name: g-recaptcha-response
            label: Captcha
            type: captcha
            recaptcha_not_validated: 'Captcha not valid!'
    buttons:
        -
            type: submit
            outerclasses: mx-auto
            classes: 'btn btn-primary mb-0 btn-block'
            value: 'Get My Free Rental Analysis'
    process:
        -
            captcha: true
        -
            email:
                from: '{{ config.plugins.email.from }}'
                to: '{{ config.plugins.email.to }}'
                subject: '[Property Maintenance] {{ form.value.name|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            save:
                fileprefix: feedback-
                dateformat: Ymd-His-u
                extension: txt
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            message: 'Thank you for getting in touch!'
        -
            display: /forms/thanks
process:
    markdown: true
    twig: true
---

