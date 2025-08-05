import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Alessandria",
  canonical: links.servizi["centrifugazione-fanghi"]["alessandria"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Alessandria",
  locationNames: { label: "Alessandria", href: "alessandria" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["alessandria"],
      name: "Alessandria",
  }),
});
