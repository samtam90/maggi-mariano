import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Novara",
  canonical: links.servizi["centrifugazione-fanghi"]["novara"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Novara",
  locationNames: { label: "Novara", href: "novara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["novara"],
      name: "Novara",
  }),
});
