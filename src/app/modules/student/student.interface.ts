import { Schema, model, connect } from 'mongoose';

interface User {
    name: string;
    email: string;
    avatar?: string;
  }