import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Nuoro",
  canonical: links.servizi["centrifugazione-fanghi"]["nuoro"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Nuoro",
  locationNames: { label: "Nuoro", href: "nuoro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["nuoro"],
      name: "Nuoro",
  }),
});
