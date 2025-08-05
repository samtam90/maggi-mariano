import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Marsciano",
  canonical: links.servizi["centrifugazione-fanghi"]["marsciano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Marsciano",
  locationNames: { label: "Marsciano", href: "marsciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
