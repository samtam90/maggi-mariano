import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Montecchio",
  canonical: links.servizi["centrifugazione-fanghi"]["montecchio"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Montecchio",
  locationNames: { label: "Montecchio", href: "montecchio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
