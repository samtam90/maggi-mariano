import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Massa-Carrara",
  canonical: links.servizi["disidratazione-fanghi"]["massa-carrara"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Massa-Carrara",
  locationNames: { label: "Massa-Carrara", href: "massa-carrara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["massa-carrara"],
      name: "Massa-Carrara",
  }),
});
