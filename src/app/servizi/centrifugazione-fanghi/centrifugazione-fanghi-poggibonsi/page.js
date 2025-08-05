import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Poggibonsi",
  canonical: links.servizi["centrifugazione-fanghi"]["poggibonsi"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Poggibonsi",
  locationNames: { label: "Poggibonsi", href: "poggibonsi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
