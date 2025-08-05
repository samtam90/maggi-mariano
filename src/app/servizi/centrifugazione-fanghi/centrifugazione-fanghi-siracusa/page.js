import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Siracusa",
  canonical: links.servizi["centrifugazione-fanghi"]["siracusa"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Siracusa",
  locationNames: { label: "Siracusa", href: "siracusa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siracusa"],
      name: "Siracusa",
  }),
});
