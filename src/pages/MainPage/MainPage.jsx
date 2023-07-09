import React from 'react';
import { Footer } from '../../components/Footer';
import { Films } from '../../components/Films';
import { UserMenu } from '../../components/UserMenu';

export const MainPage = () => (
  <>
    <UserMenu />
    <Films />
    <Footer />
  </>
);
