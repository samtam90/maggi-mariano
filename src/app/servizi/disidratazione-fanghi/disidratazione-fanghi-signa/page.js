import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Signa",
  canonical: links.servizi["disidratazione-fanghi"]["signa"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Signa",
  locationNames: { label: "Signa", href: "signa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
