window.globalLanguage = "en";


document.addEventListener('DOMContentLoaded', function () {
            const appointmentForm = document.getElementById('appointmentForm');
            const timeSelect = document.getElementById('time');
            const confirmationMessage = document.getElementById('confirmationMessage');

            // Generate time options with 30-minute intervals from 7 am to 8 pm
            for (let i = 7 * 2; i <= 20 * 2; i++) {
                const hours = Math.floor(i / 2);
                const minutes = i % 2 === 0 ? '00' : '30';
                const period = hours >= 12 ? 'PM' : 'AM';

                // Convert to 12-hour format
                const hours12 = hours % 12 || 12;
                const timeOption = `${String(hours12).padStart(2, '0')}:${minutes} ${period}`;

                // Only add time options within the specified range
                if (hours >= 7 && hours <= 20) {
                    const optionElement = document.createElement('option');
                    optionElement.value = timeOption;
                    optionElement.textContent = timeOption;
                    timeSelect.appendChild(optionElement);
                }
            }

            appointmentForm.addEventListener('submit', function (event) {
                event.preventDefault();

                // Get form values
                const date = document.getElementById('date').value;
                const time = timeSelect.value;
                const name = document.getElementById('name').value;

                // Perform validation
                if (isValidDate(date)) {
                    if (date && time && name) {
                        // Formulate the WhatsApp message
                        const whatsappMessage = `Hi, I would like to book an appointment.\nDate: ${formatDate(date)}\nTime: ${time}\nName: ${name}`;

                        // Replace '1234567890' with the actual phone number
                        const phoneNumber = '50686633021';

                        // Open WhatsApp chat with the predefined message
                        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
                    } else {
                        // Display warning about incomplete fields
                        showWarningModal('Please fill out all fields before sending the WhatsApp message.');
                    }
                } else {
                    // Display warning about invalid date
                    showWarningModal('Please select a date after today before sending the WhatsApp message.');
                }
            });
        });

        function openWhatsApp() {
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const name = document.getElementById('name').value;
            const text = '';

            // Perform validation
                if (date && time && name) {
                    // Formulate the WhatsApp message
                    if (window.globalLanguage === "en"){
                    const whatsappMessage = `Hi, I would like to book an appointment on: \nDate: ${formatDate(date)}\nTime: ${time}\nName: ${name}`;
                    // Replace '1234567890' with the actual phone number
                    const phoneNumber = '50686633021';
                    // Open WhatsApp chat with the predefined message
                    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
                    } else {
                    const whatsappMessage = `Hola, me gustaría reservar una cita el: \nDia: ${formatDate(date)}\nHora: ${time}\nNombre: ${name}`;
                    // Replace '1234567890' with the actual phone number
                    const phoneNumber = '50686633021';
                    // Open WhatsApp chat with the predefined message
                    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
                    }
                } else {
                  if (window.globalLanguage === "en"){
                    // Display warning about incomplete fields
                    showWarningModal('Please fill out all fields before sending the WhatsApp message.');
                  } else {
                    // Display warning about incomplete fields
                    showWarningModal('Por favor complete todos los campos antes de enviar el mensaje de WhatsApp.');
                  }
                }
        }

        function formatDate(inputDate) {
            const dateObject = new Date(inputDate);
            const day = dateObject.getDate() + 1;
            const month = dateObject.getMonth() + 1; // Months are 0-indexed
            const year = dateObject.getFullYear();

            return `${day}/${month}/${year}`;
        }

        // Functions for the warning modal
        function showWarningModal(message) {
            const modal = document.getElementById('warningModal');
            const overlay = document.getElementById('overlay');
            const warningText = document.getElementById('warningText');

            warningText.textContent = message;
            modal.style.display = 'block';
            overlay.style.display = 'block';
        }

        function hideWarningModal() {
            const modal = document.getElementById('warningModal');
            const overlay = document.getElementById('overlay');

            modal.style.display = 'none';
            overlay.style.display = 'none';
        }


        function changeLanguage(language) {
            const greetingElement = document.getElementById('greeting');
            const top = document.getElementById('topMenu');
            const gal = document.getElementById('galMenu');
            const us = document.getElementById('abouttxt');
            const contact = document.getElementById('contact');
            const galbutton = document.getElementById('galButton');
            const portfo = document.getElementById('portf');
            const text1 = document.getElementById('text1');
            const inn1 = document.getElementById('inner1');
            const inn2 = document.getElementById('inner2');
            const inn3 = document.getElementById('inner3');
            const inn4 = document.getElementById('inner4');
            const inn5 = document.getElementById('inner5');
            const inn6 = document.getElementById('inner6');
            const us2 = document.getElementById('aboutUs');
            const text2 = document.getElementById('text2');
            const apptxt = document.getElementById('appointtxt');
            const timtxt = document.getElementById('timetxt');
            const dattxt = document.getElementById('datetxt');
            const timtxt2 = document.getElementById('timetxt2');
            const namtxt = document.getElementById('nametxt');
            const namtxt2 = document.getElementById('name');
            //const grouptxt = document.getElementById('grouptxt');
            //const group = document.getElementById('group');



            if (language === 'en') {
                greetingElement.textContent = 'Hello, welcome to Demo Site';
                top.textContent = 'Home';
                gal.textContent = 'Gallery';
                us.textContent = 'About Us';
                contact.textContent = 'Contact Us';
                galbutton.textContent = 'Gallery';
                portfo.textContent = 'Portfolio';
                text1.textContent = "Vitae natoque dictum etiam semper magnis enim feugiat convallis convallis Egestas rhoncus ridiculus in quis risus amet curabitur tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis fusce hendrerit lacus ridiculus.";
                inn1.textContent = 'Ipsum Feugiat';
                inn2.textContent = 'Ipsum Feugiat';
                inn3.textContent = 'Ipsum Feugiat';
                inn4.textContent = 'Ipsum Feugiat';
                inn5.textContent = 'Ipsum Feugiat';
                inn6.textContent = 'Ipsum Feugiat';
                us2.textContent = 'About Us';
                text2.textContent = "Vitae natoque dictum etiam semper magnis enim feugiat convallis convallis Egestas rhoncus ridiculus in quis risus amet curabitur tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis fusce hendrerit lacus ridiculus.";
                apptxt.textContent = 'Book an Appointment';
                timtxt.textContent = 'Time is in Costa Rica time zone';
                dattxt.textContent = 'Select Date:';
                timtxt2.textContent = 'Select Time:';
                namtxt.textContent = 'Your Name for the reservation:';
                namtxt2.placeholder = 'Your Name';
                //grouptxt.placeholder = 'Group size:';
                //group.placeholder = 'Group size';
                window.globalLanguage = "en";

            } else if (language === 'es') {
                greetingElement.textContent = 'Hola, bienvenido a Demo Site';
                top.textContent = 'Inicio';
                gal.textContent = 'Galeria';
                us.textContent = 'Sobre Nosotros';
                contact.textContent = 'Contactanos';
                galbutton.textContent = 'Galeria';
                portfo.textContent = 'Portafolio';
                text1.textContent = "Vitae natoque dictum etiam semper magnis enim feugiat convallis convallis Egestas rhoncus ridiculus in quis risus amet curabitur tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis fusce hendrerit lacus ridiculus.";
                inn1.textContent = 'Rhoncus Semper';
                inn2.textContent = 'Rhoncus Semper';
                inn3.textContent = 'Rhoncus Semper';
                inn4.textContent = 'Rhoncus Semper';
                inn5.textContent = 'Rhoncus Semper';
                inn6.textContent = 'Rhoncus Semper';
                us2.textContent = 'Sobre Nosotros';
                text2.textContent = "Vitae natoque dictum etiam semper magnis enim feugiat convallis convallis Egestas rhoncus ridiculus in quis risus amet curabitur tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis fusce hendrerit lacus ridiculus.";
                apptxt.textContent = 'Agenda con nosotros';
                timtxt.textContent = 'El tiempo está en la zona horaria de Costa Rica.';
                dattxt.textContent = 'Selecione un Dia:';
                timtxt2.textContent = 'Selecione un Hora';
                namtxt.textContent = 'Su nombre para la reserva:';
                namtxt2.placeholder = 'Nombre';
                //grouptxt.placeholder = 'Tamaño del grupo:';
                //group.placeholder = 'Tamaño del grupo';
                window.globalLanguage = "es";


            }

            // Puedes agregar más lógica aquí para cambiar el contenido de toda la página según el idioma.
        }
