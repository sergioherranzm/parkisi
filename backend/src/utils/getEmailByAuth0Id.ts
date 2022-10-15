import { UserProfileModel } from '../plugins/userProfile/model/UserProfileModel';

export const getEmailByAuth0Id = async (searchedID: string) => {
  const userProfile = await UserProfileModel.findOne({ auth0_id: searchedID });
  const email = userProfile?.email ?? 'User email not found';
  return email;
};
