import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Camucia",
  canonical: links.servizi["centrifugazione-fanghi"]["camucia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Camucia",
  locationNames: { label: "Camucia", href: "camucia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
