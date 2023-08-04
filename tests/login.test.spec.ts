

(async () => {
  // Launch the browser
  const browser = await chromium.launch();

  // Create a new page
  const page = await browser.newPage();

  // Navigate to the web page
  await page.goto('https://demoqa.com/automation-practice-form');

  // Fill out the form
  await page.fill('#firstName', 'tanweer');
  await page.fill('#lastName', 'ahmad');
  await page.fill('#userEmail', 'tanweer00@gmail  .com');
  await page.click('label[for="gender-radio-1"]');
  await page.fill('#userNumber', '1234567890');

  // Select date of birth
  await page.click('#dateOfBirthInput');
  await page.selectOption('.react-datepicker__month-select', { value: '5' });
  await page.selectOption('.react-datepicker__year-select', { value: '1990' });
  await page.click('.react-datepicker__day--005');

  // Select subjects
  await page.fill('#subjectsInput', 'Math');
  await page.click('.subjects-auto-complete__menu-list>div');

  // Select hobbies
  await page.click('label[for="hobbies-checkbox-1"]');

  // Upload a picture
  await page.setInputFiles('#uploadPicture', 'path_to_your_picture.jpg');

  // Enter address
  await page.fill('#currentAddress', '123 Main St, City, Country');

  // Select state and city
  await page.click('#state');
  await page.click('#state>div>div');
  await page.click('#city');
  await page.click('#city>div>div');

  // Submit the form
  await page.click('#submit');

  // Wait for submission result
  await page.waitForSelector('.modal-content .modal-body');
  const successMessage = await page.textContent('.modal-content .modal-body');
  console.log(`Submission result: ${successMessage}`);

  // Close the browser
  await browser.close();
})();