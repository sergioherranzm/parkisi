import sgMail from '@sendgrid/mail';
import { NextApiHandler } from 'next';
import { SENDGRID_API_KEY } from '../../../lib/config';
import {
  mailParkingCreation,
  mailParkingDeletion,
  mailReserveCreation,
  mailReserveCreationOwner,
  mailReserveDeletion,
  mailReserveDeletionOwner,
  mailSlotCreation,
  mailSlotDeletion,
  mailVehicleCreation,
  mailVehicleDeletion,
} from './mailTemplates';

sgMail.setApiKey(SENDGRID_API_KEY);

const api_route: NextApiHandler = async (req, res) => {
  const mailFrom = 'sergioherranzm@gmail.com';

  const {
    mailTo,
    mailType,
    address = '{parking address}',
    period = '{reserve period}',
    hyperlink = '#',
    description = '{parking description}',
    identification = '{slot id}',
    model = '{vehicle model}',
    plate = '{vehicle plate number}',
  } = req.query as {
    mailTo: string;
    mailType:
      | 'reserveCreation'
      | 'reserveDeletion'
      | 'reserveCreationOwner'
      | 'reserveDeletionOwner'
      | 'parkingCreation'
      | 'parkingDeletion'
      | 'slotCreation'
      | 'slotDeletion'
      | 'vehicleCreation'
      | 'vehicleDeletion';
    address?: string;
    period?: string;
    hyperlink?: string;
    description?: string;
    identification?: string;
    model?: string;
    plate?: string;
  };

  let mailSubject = 'Parkisi email';
  let emailTemplate = {
    textContent: 'Email content',
    htmlContent: '<div>Email content</div>',
  };

  if (mailType === 'reserveCreation') {
    mailSubject = 'New parking reserve on Parkisi';
    emailTemplate = mailReserveCreation(address, period, hyperlink);
  } else if (mailType === 'reserveDeletion') {
    mailSubject = 'Reserve cancelation on Parkisi';
    emailTemplate = mailReserveDeletion(address, period, hyperlink);
  } else if (mailType === 'reserveCreationOwner') {
    mailSubject = 'Reserve creation in one of your parkings';
    emailTemplate = mailReserveCreationOwner(
      address,
      period,
      identification,
      hyperlink
    );
  } else if (mailType === 'reserveDeletionOwner') {
    mailSubject = 'Reserve deletion in one of your parkings';
    emailTemplate = mailReserveDeletionOwner(
      address,
      period,
      identification,
      hyperlink
    );
  } else if (mailType === 'parkingCreation') {
    mailSubject = 'New parking created on Parkisi';
    emailTemplate = mailParkingCreation(address, description, hyperlink);
  } else if (mailType === 'parkingDeletion') {
    mailSubject = 'Parking deletion on Parkisi';
    emailTemplate = mailParkingDeletion(address, description, hyperlink);
  } else if (mailType === 'slotCreation') {
    mailSubject = 'New parking slot created on Parkisi';
    emailTemplate = mailSlotCreation(
      address,
      description,
      identification,
      hyperlink
    );
  } else if (mailType === 'slotDeletion') {
    mailSubject = 'Parking slot deletion on Parkisi';
    emailTemplate = mailSlotDeletion(
      address,
      description,
      identification,
      hyperlink
    );
  } else if (mailType === 'vehicleCreation') {
    mailSubject = 'New vehicle created on Parkisi';
    emailTemplate = mailVehicleCreation(model, plate, hyperlink);
  } else if (mailType === 'vehicleDeletion') {
    mailSubject = 'Vehicle deletion on Parkisi';
    emailTemplate = mailVehicleDeletion(model, plate, hyperlink);
  }

  const msg = {
    to: mailTo,
    from: mailFrom,
    subject: mailSubject,
    text: emailTemplate.textContent,
    html: emailTemplate.htmlContent,
  };

  //------------------------------------------------------------------------------------------------------------------------------------------------
  //const emailResponse = 'Email DEACTIVATED'; // This line is just to pause email api to not reach the mail limit.
  const emailResponse = await sgMail.send(msg); // This line is to activate email sending
  //------------------------------------------------------------------------------------------------------------------------------------------------

  res.json({ emailResponse: emailResponse });
};

export default api_route;
