import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Capolona",
  canonical: links.servizi["centrifugazione-fanghi"]["capolona"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Capolona",
  locationNames: { label: "Capolona", href: "capolona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
