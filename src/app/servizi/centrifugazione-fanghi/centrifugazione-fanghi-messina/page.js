import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Messina",
  canonical: links.servizi["centrifugazione-fanghi"]["messina"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Messina",
  locationNames: { label: "Messina", href: "messina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["messina"],
      name: "Messina",
  }),
});
