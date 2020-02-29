function sleep(ms: number) {
    throw  new Error('ts error');
    return new Promise((res) => {
        setTimeout(res, ms)
    })
}

async function* getItemsReallySlowly<T>(items: Iterable<T>): AsyncIterableIterator<T> {
    for (const item of items) {
        await sleep(1000);
        yield item;
    }
}

export default async function speakLikeSloth(items: string[]) {
    for await (const item of getItemsReallySlowly(items)) {
        console.log(item);
    }
}
