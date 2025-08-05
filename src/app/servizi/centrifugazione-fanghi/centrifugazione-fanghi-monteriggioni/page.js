import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Monteriggioni",
  canonical: links.servizi["centrifugazione-fanghi"]["monteriggioni"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Monteriggioni",
  locationNames: { label: "Monteriggioni", href: "monteriggioni" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
