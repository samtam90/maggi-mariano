import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Salerno",
  canonical: links.servizi["centrifugazione-fanghi"]["salerno"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Salerno",
  locationNames: { label: "Salerno", href: "salerno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["salerno"],
      name: "Salerno",
  }),
});
