import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi La Spezia",
  canonical: links.servizi["centrifugazione-fanghi"]["la-spezia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi La Spezia",
  locationNames: { label: "La Spezia", href: "la-spezia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["la-spezia"],
      name: "La Spezia",
  }),
});
