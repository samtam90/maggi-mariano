import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Stroncone",
  canonical: links.servizi["centrifugazione-fanghi"]["stroncone"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Stroncone",
  locationNames: { label: "Stroncone", href: "stroncone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
