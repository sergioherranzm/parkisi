import { UserProfileModel } from '../plugins/userProfile/model/UserProfileModel';

export const getUserIdByAuth0Id = async (searchedID: string) => {
  const userProfile = await UserProfileModel.findOne({ auth0_id: searchedID });
  const user_id = userProfile?._id ?? 'User _id not found';
  return user_id;
};
