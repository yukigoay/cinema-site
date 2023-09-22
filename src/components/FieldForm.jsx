import React from 'react';

export default function FieldForm({fieldName, fieldPlaceholder}) {

    return (
        <div class="space-y-1">
        <label for="tk-pages-sign-in-email" class="font-medium">{fieldName}</label>
        <input class="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" type="email" id="tk-pages-sign-in-email" placeholder={fieldPlaceholder} />
      </div>
    );


}