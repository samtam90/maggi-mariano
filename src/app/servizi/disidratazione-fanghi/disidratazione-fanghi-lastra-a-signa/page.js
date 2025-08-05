import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Lastra a Signa",
  canonical: links.servizi["disidratazione-fanghi"]["lastra-a-signa"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Lastra a Signa",
  locationNames: { label: "Lastra a Signa", href: "lastra-a-signa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
