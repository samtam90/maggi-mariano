import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Amelia",
  canonical: links.servizi["disidratazione-fanghi"]["amelia"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Amelia",
  locationNames: { label: "Amelia", href: "amelia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
