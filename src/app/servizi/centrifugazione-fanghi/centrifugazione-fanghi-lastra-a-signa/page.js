import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Lastra a Signa",
  canonical: links.servizi["centrifugazione-fanghi"]["lastra-a-signa"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Lastra a Signa",
  locationNames: { label: "Lastra a Signa", href: "lastra-a-signa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
