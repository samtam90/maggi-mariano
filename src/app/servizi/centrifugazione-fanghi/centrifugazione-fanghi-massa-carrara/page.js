import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Massa-Carrara",
  canonical: links.servizi["centrifugazione-fanghi"]["massa-carrara"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Massa-Carrara",
  locationNames: { label: "Massa-Carrara", href: "massa-carrara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["massa-carrara"],
      name: "Massa-Carrara",
  }),
});
