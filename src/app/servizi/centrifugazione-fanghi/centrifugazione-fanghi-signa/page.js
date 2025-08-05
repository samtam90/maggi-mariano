import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Signa",
  canonical: links.servizi["centrifugazione-fanghi"]["signa"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Signa",
  locationNames: { label: "Signa", href: "signa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
