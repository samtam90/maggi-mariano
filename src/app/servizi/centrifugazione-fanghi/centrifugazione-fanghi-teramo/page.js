import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Teramo",
  canonical: links.servizi["centrifugazione-fanghi"]["teramo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Teramo",
  locationNames: { label: "Teramo", href: "teramo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["teramo"],
      name: "Teramo",
  }),
});
