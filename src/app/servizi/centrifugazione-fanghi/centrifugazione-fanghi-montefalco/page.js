import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Montefalco",
  canonical: links.servizi["centrifugazione-fanghi"]["montefalco"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Montefalco",
  locationNames: { label: "Montefalco", href: "montefalco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
