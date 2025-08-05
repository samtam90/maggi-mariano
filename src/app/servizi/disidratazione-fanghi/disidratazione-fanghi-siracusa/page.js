import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Siracusa",
  canonical: links.servizi["disidratazione-fanghi"]["siracusa"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Siracusa",
  locationNames: { label: "Siracusa", href: "siracusa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siracusa"],
      name: "Siracusa",
  }),
});
