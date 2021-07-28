List of possible for test cases:
1. Form renders correctly.
  - Conditional fields show up when conditions met (1 test per condition)
2. Filling out all fields -> submit properly
3. Filling out only mandatory fields -> Submits properly
4. Test all field level validation errors


Accessibility Testing: (Optional)
1. Testing focus order of form fields
2. Can submit form with keyboard (enter)


Notes:
- Get form inputs via -> screen.getByLabelText
- Get buttons via -> screen.getByRole('button', {name: /button_name/i})
