import type { ComponentMeta } from '@storybook/react-native';
import IconStory, {
  AddIcon,
  AlertCircleIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  AtSignIcon,
  BellIcon,
  CalendarDaysIcon,
  CheckIcon,
  CheckCircleIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  ChevronsUpDownIcon,
  CircleIcon,
  ClockIcon,
  CloseIcon,
  CloseCircleIcon,
  CopyIcon,
  DownloadIcon,
  EditIcon,
  EyeIcon,
  EyeOffIcon,
  FavouriteIcon,
  GlobeIcon,
  GripVerticalIcon,
  HelpCircleIcon,
  InfoIcon,
  LinkIcon,
  ExternalLinkIcon,
  LoaderIcon,
  LockIcon,
  MailIcon,
  MenuIcon,
  MessageCircleIcon,
  MoonIcon,
  PaperclipIcon,
  PhoneIcon,
  PlayIcon,
  RemoveIcon,
  RepeatIcon,
  Repeat1Icon,
  SearchIcon,
  SettingsIcon,
  ShareIcon,
  SlashIcon,
  StarIcon,
  SunIcon,
  ThreeDotsIcon,
  TrashIcon,
  UnlockIcon,
} from './Icon';

const IconMeta: ComponentMeta<any> = {
  title: 'stories/MEDIA AND ICONS/Icons',
  component: IconStory,
  argTypes: {
    size: {
      control: 'select',
      options: ['xl', 'lg', 'md', 'sm', 'xs'],
    },
    name: {
      control: 'select',
      options: [
        // AddIcon,
        // AlertCircleIcon,
        // ArrowUpIcon,
        // ArrowDownIcon,
        // ArrowRightIcon,
        // ArrowLeftIcon,
        // AtSignIcon,
        // BellIcon,
        // CalendarDaysIcon,
        // CheckIcon,
        // CheckCircleIcon,
        // ChevronUpIcon,
        // ChevronDownIcon,
        // ChevronLeftIcon,
        // ChevronRightIcon,
        // ChevronsLeftIcon,
        // ChevronsRightIcon,
        // ChevronsUpDownIcon,
        // CircleIcon,
        // ClockIcon,
        // CloseIcon,
        // CloseCircleIcon,
        // CopyIcon,
        // DownloadIcon,
        // EditIcon,
        // EyeIcon,
        // EyeOffIcon,
        // FavouriteIcon,
        GlobeIcon,
        // GripVerticalIcon,
        // HelpCircleIcon,
        // InfoIcon,
        // LinkIcon,
        // ExternalLinkIcon,
        // LoaderIcon,
        // LockIcon,
        // MailIcon,
        // MenuIcon,
        // MessageCircleIcon,
        // MoonIcon,
        // PaperclipIcon,
        // PhoneIcon,
        // PlayIcon,
        // RemoveIcon,
        // RepeatIcon,
        // Repeat1Icon,
        // SearchIcon,
        // SettingsIcon,
        // ShareIcon,
        // SlashIcon,
        // StarIcon,
        // SunIcon,
        // ThreeDotsIcon,
        // TrashIcon,
        // UnlockIcon,
      ],
    },
  },
};

export default IconMeta;
export { IconStory };
