import React from 'react';
import { Footer } from '../../SharedComponents/Footer';
import { Films } from '../../SharedComponents/Films';
import { UserMenu } from '../UserMenu';

export const MainPage = () => (
  <>
    <UserMenu />
    <Films />
    <Footer />
  </>
);
